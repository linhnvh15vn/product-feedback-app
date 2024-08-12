import { redirect } from 'next/navigation';

interface Props {
  // Add your component props here
}

export default function Page(props: Props) {
  return redirect('/suggestion');
}
