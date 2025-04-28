import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/testimoni')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/testimoni"!</div>
}
