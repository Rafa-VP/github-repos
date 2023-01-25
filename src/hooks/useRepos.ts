import { useQuery } from "@tanstack/react-query"
import apiGitHub from "../api/github"
import { Repository } from "./types"

async function fetchRespos() {
  const { data } = await apiGitHub.get<Repository[]>("/users/rafaelvp17/repos")
  return data
}

export function useFetchRepositories() {
  return useQuery({ queryKey: ["repos"], queryFn: fetchRespos })
}
