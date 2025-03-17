const common = {
  margin: 0
};

const fontStyles = {
  heading: {
    ...common,
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "24px",
    letterSpacing: "0.8px",
  },
  body: {
    ...common,
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
    letterSpacing: "0.64px",
    margin: 0,
  },
  bodyEmphasized: {
    ...common,
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "20px",
    letterSpacing: "0.64px",
  },
  caption: {
    ...common,
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "16px",
    letterSpacing: "0.48px",
  },
  captionEmphasized: {
    ...common,
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "16px",
    letterSpacing: "0.48px",
  }
};

export default fontStyles;