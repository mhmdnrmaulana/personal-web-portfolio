"use server"

export const getData = async (url: string) => {
  const res = await fetch(url, {
    cache: "no-store",
  })

  if (!res.ok) {
    throw new Error("Failed to data Fetch")
  }

  return res.json()
}
