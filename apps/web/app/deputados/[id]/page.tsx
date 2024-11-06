import Deputado from "./component";

export const dynamic = "force-dynamic";

export default async function Page({ params }: { params: { id: string } }) {
  return <Deputado id={params.id} />
}
