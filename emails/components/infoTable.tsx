import { Text, Section, Row, Column } from "@react-email/components";
import React from "react";
import colors from "../utils/colors";
import fontStyles from "../utils/fontStyles";

import "dotenv/config";

interface rowProps {
  title: string;
  value: string;
}

interface CommonFrameProps {
  title: string;
  rows: rowProps[];
}

const Email: React.FC<CommonFrameProps> = (props) => {
  return (
    <Section>
      <Text
        style={{
          ...fontStyles.caption,
          color: colors.surface.secondary,
          marginBottom: "8px",
        }}
      >
        {props.title}
      </Text>
      <Section style={{
        background: colors.bg.secondary,
        padding: "8px",
        borderRadius: "4px",
        overflow: "hidden",
      }}>
        {props.rows.map((row, index) => (
          <Row key={index}>
            <Column
              align="left"
              style={{
                ...fontStyles.caption,
                color: colors.surface.primary,
                marginBottom: "8px",
                padding: "8px"
              }}
            >
              {row.title}
            </Column>
            <Column
              align="right"
              style={{
                ...fontStyles.captionEmphasized,
                color: colors.surface.primary,
                padding: "8px"
              }}
            >
              {row.value}
            </Column>
          </Row>
        ))}
      </Section>
    </Section>
  );
};

export default Email;
