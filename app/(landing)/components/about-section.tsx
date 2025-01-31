import { gql } from "@apollo/client";
import {
  PSectionHeader,
  PTypography,
  Stack,
} from "@paolojulian.dev/design-system";
import classNames from "classnames";
import AppReactMarkdown from "../../../components/app-react-markdown/app-react-markdown";
import { Portfolio } from "../../../graphql/portfolio.types";

interface Props {
  portfolio: Pick<Portfolio, "about" | "whatIDo">;
}

export default function AboutSection({ portfolio }: Props) {
  return (
    <section id={"about"} className={"py-[100px] md:py-[200px]"}>
      <Stack className="gap-24 md:gap-52">
        <Stack className="gap-10">
          <PSectionHeader title="About" />
          <AppReactMarkdown>{portfolio.about}</AppReactMarkdown>
        </Stack>
        <Stack className="gap-10">
          <PTypography variant="body-wide">WHAT I DO</PTypography>
          <Stack>
            {portfolio.whatIDo.map((text, i) => (
              <PTypography
                key={i}
                className={classNames(
                  "border-t border-gray-darker/50 uppercase",
                  { "border-b": i === portfolio.whatIDo.length - 1 },
                )}
                variant="heading-xl"
              >
                {text}
              </PTypography>
            ))}
          </Stack>
        </Stack>
      </Stack>
    </section>
  );
}

AboutSection.fragments = {
  portfolio: gql`
    fragment AboutFragment on Portfolio {
      about
      whatIDo
    }
  `,
};
