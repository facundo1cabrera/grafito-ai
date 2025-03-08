import Image, { type ImageProps } from "next/image";
import { prisma } from "@repo/db";

type Props = Omit<ImageProps, "src"> & {
  srcLight: string;
  srcDark: string;
};

const ThemeImage = (props: Props) => {
  const { srcLight, srcDark, ...rest } = props;

  return (
    <>
      <Image {...rest} src={srcLight} className="imgLight" />
      <Image {...rest} src={srcDark} className="imgDark" />
    </>
  );
};

export default async function Home() {


  if (!process.env.DATABASE_URL) {
    console.warn('DATABASE_URL is not set in server component');
  }

  const user = await prisma.user.findFirst() 
  return (
    <div>
      {user?.name ?? "No user added yet"}
    </div>
  );
}
