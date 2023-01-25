import { useMutation, useQuery } from "@tanstack/react-query"
import apiGitHub from "../api/github"
import { Repository } from "./types"

async function fetchRespos(username: string) {
  const { data } = await apiGitHub.get<Repository[]>(
    `/users/${username}/repos?sort=create`
  )
  return data
}

export function useFetchRepositories(username: string) {
  return useMutation({
    mutationKey: ["repos", username],
    mutationFn: () => fetchRespos(username),
  })
}
