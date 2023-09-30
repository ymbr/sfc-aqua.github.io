export type TMember = {
  name: string
  login: string
  roles: string[]
  imagePath: string
  description: string
  links: {
    name: string
    url: string
  }[]
  stat?: {
    name: string
    value: number
    max: number
  }[]
}

const template: TMember = {
  name: "",
  login: "",
  roles: [""],
  imagePath: "",
  description: "",
  links: [
    {
      name: "",
      url: "",
    },
  ],
  stat: [
    {
      name: "",
      value: 0,
      max: 0,
    },
  ],
}

export const members: TMember[] = [
  {
    name: "Rod Van Meter",
    login: "rdv",
    roles:["Chief AQUAnaut"],
    imagePath:
      "/images/members/rdv-kawaguchiko-2204-recropped-small-avatar.jpg",
    description: "Doing quantum since 2003",
    links: [
      { name: "Mastodon", url: "https://famichiki.jp/@rdviii" },
      { name: "Facebook", url: "https://www.facebook.com/rdviii" },
      { name: "Github", url: "https://github.com/rdviii" },
      {
        name: "Google Scholar",
        url: "https://scholar.google.com/citations?user=-YlArkcAAAAJ&hl=en",
      },
      {
        name: "IETF Datatracker",
        url: "https://datatracker.ietf.org/person/rdv@sfc.wide.ad.jp",
      },
      { name: "blog", url: "https://rdvlivefromtokyo.blogspot.com/" },
      { name: "campus web page", url: "https://web.sfc.keio.ac.jp/~rdv/" },
      { name: "YouTube", url: "https://www.youtube.com/@rodvanmeter517" },
    ],
    stat: [
      { name: "Strength", value: 20, max: 100 },
      { name: "Agility", value: 30, max: 100 },
      { name: "Intelligence", value: 93, max: 100 },
      { name: "Luck", value: 10, max: 100 },
    ],
  },
  {
    name: "Michal Hajdušek",
    roles: ["Project Associate Professor"],
    login: "michal",
    imagePath: "/images/members/michal.png",
    description: "Engineering is hard!",
    links: [
      {
        name: "Google Scholar",
        url: "https://scholar.google.com/citations?user=8DgauUcAAAAJ&hl=en&oi=ao",
      },
    ],
    stat: [
      { name: "Strength", value: 32, max: 100 },
      { name: "Agility", value: 68, max: 100 },
      { name: "Intelligence", value: 91, max: 100 },
      { name: "Luck", value: 20, max: 100 },
    ],
  },
  {
    name: "Amin Taherkhani",
    login: "amin",
    roles: ["Research Assistant"],
    imagePath: "/images/members/amin.jpg",
    description: "(|Classical\u27E9+|Quantum\u27E9)/\u221A2 Networking",
    links: [
      {
        name: "Scholar",
        url: "https://scholar.google.com/citations?user=z8rkbsIAAAAJ&hl=en",
      },
      {
        name: "Github",
        url: "https://github.com/hhatpsi",
      },
    ],
    stat: [
      { name: "Strength", value: 12, max: 100 },
      { name: "Agility", value: 4, max: 100 },
      { name: "Intelligence", value: 4, max: 100 },
      { name: "Luck", value: 60, max: 100 },
    ],
  },
  {
    name: "Sara",
    roles: ["D3", "Captain of USS AQUA"],
    login: "sara",
    imagePath: "/images/members/sara.png",
    description: "To get out of here quickly",
    links: [
      { name: "Facebook", url: "" },
      { name: "Github", url: "" },
    ],
    stat: [
      { name: "Strength", value: 20, max: 100 },
      { name: "Agility", value: 30, max: 100 },
      { name: "Intelligence", value: 100, max: 100 },
      { name: "Luck", value: 10, max: 100 },
    ],
  },
  {
    name: "Poramet Pathumsoot",
    roles: ["D2", "Former Captain of USS AQUA"],
    login: "poramet",
    imagePath: "/images/members/poramet.jpg",
    description: "To boldly go where no one has gone before",
    links: [
      { name: "Facebook", url: "" },
      { name: "Github", url: "" },
    ],
    stat: [
      { name: "Strength", value: 20, max: 100 },
      { name: "Agility", value: 30, max: 100 },
      { name: "Intelligence", value: 50, max: 100 },
      { name: "Luck", value: 10, max: 100 },
    ],
  },
  {
    name: "Makoto Nakai",
    roles: ["M2", "Communication Engineer"],
    login: "dave",
    imagePath: "/images/members/dave.png",
    description: "I'm a student at Keio University",
    links: [{ name: "Github", url: "https://github.com/makotonakai" }],
    stat: [
      { name: "Strength", value: 20, max: 100 },
      { name: "Agility", value: 30, max: 100 },
      { name: "Intelligence", value: 50, max: 100 },
      { name: "Luck", value: 10, max: 100 },
    ],
  },
]
