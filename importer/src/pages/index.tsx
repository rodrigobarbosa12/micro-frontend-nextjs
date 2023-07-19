import 'bootstrap/dist/css/bootstrap.min.css';
import { ComponentType } from 'react'
import type { GetServerSideProps } from 'next'
import dynamic from 'next/dynamic'
import { ProfileGitHub } from '@/components/ProfileGitHub'

interface Props {
  gitHub: {
    name: string;
    html_url: string;
    avatar_url: string;
    bio: string;
    followers: number;
    public_repos: number;
    company: string;
  }
}

const Header: ComponentType<Props> = dynamic(() => import('exporter/header'));

export const getServerSideProps: GetServerSideProps<{
  gitHub: Props
}> = async () => {
  const res = await fetch('https://api.github.com/users/rodrigobarbosa12')
  const gitHub = await res.json()

  return { props: { gitHub } }
}

export default function Home({ gitHub }: Props) {
  return (
    <>
      <Header gitHub={gitHub} />
      <ProfileGitHub gitHub={gitHub} />
    </>
  )
}
