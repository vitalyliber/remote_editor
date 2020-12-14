export default function getTitles(url) {
  return fetch("/api/hello", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({ url }),
  }).then((el) => el.json());
}
