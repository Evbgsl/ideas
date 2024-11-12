import { initTRPC } from '@trpc/server'

const ideas = [
  {
    nick: 'cool-idea-nick-1',
    name: 'Idea1',
    description: 'Idea 1 description',
  },
  {
    nick: 'cool-idea-nick-2',
    name: 'Idea2',
    description: 'Idea 2 description',
  },
  {
    nick: 'cool-idea-nick-3',
    name: 'Idea3',
    description: 'Idea 3 description',
  },
  {
    nick: 'cool-idea-nick-4',
    name: 'Idea4',
    description: 'Idea 4 description',
  },
  {
    nick: 'cool-idea-nick-5',
    name: 'Idea5',
    description: 'Idea 5 description',
  },
]

const trpc = initTRPC.create()

export const trpcRouter = trpc.router({
  getIdeas: trpc.procedure.query(() => {
    return { ideas }
  }),
})

export type TrpcRouter = typeof trpcRouter
