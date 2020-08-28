async function get(username: string): Promise<GhEvent[]> {
  const res = await fetch(`https://api.github.com/users/${username}/events`);
  if (!res.ok) throw new Error(res.statusText);
  return res.json();
}

export default { get };

// Types

type GhEvent = {
  id: string;
  type: "WatchEvent";
  actor: {
    id: number;
    login: string;
    display_login: string;
    gravatar_id: string;
    url: string;
    avatar_url: string;
  };
  repo: {
    id: number;
    name: string;
    url: string;
  };
  payload: {
    action: string;
  };
  public: boolean;
  created_at: string;
};
