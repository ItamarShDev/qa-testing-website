import NextLink from "next/link";

export const Link = ({
  text,
  route,
}: {
  text: string;
  route: string;
}): JSX.Element => (
  <NextLink href={route}>
    <h2>
      <a>{text}</a>
    </h2>
  </NextLink>
);
export const HomeLink = () => <Link route={"/"} text={"Go Home"} />;
