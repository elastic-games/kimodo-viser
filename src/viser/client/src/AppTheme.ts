import {
  Checkbox,
  ColorInput,
  Select,
  TextInput,
  NumberInput,
  Paper,
  ActionIcon,
  Button,
  createTheme,
  Textarea,
} from "@mantine/core";
import { themeToVars } from "@mantine/vanilla-extract";

export const theme = createTheme({
  fontFamily: "Inter",
  autoContrast: true,
  colors: {
    dark: [
      "#D4D4D4",
      "#C8C8C8",
      "#A6A6A6",
      "#858585",
      "#6A6A6A",
      "#3C3C3C",
      "#333333",
      "#252526",
      "#2D2D2D",
      "#1E1E1E",
    ],
    elastic: [
      "#E6F4FF",
      "#CCE9FF",
      "#99D3FF",
      "#66BDFF",
      "#3794FF",
      "#1688E0",
      "#007ACC",
      "#006BB3",
      "#005A9E",
      "#004A80",
    ],
  },
  components: {
    Checkbox: Checkbox.extend({
      defaultProps: {
        radius: "xs",
      },
    }),
    ColorInput: ColorInput.extend({
      defaultProps: {
        radius: "xs",
      },
    }),
    Select: Select.extend({
      defaultProps: {
        radius: "sm",
      },
    }),
    Textarea: Textarea.extend({
      defaultProps: {
        radius: "xs",
      },
    }),
    TextInput: TextInput.extend({
      defaultProps: {
        radius: "xs",
      },
    }),
    NumberInput: NumberInput.extend({
      defaultProps: {
        radius: "xs",
      },
    }),
    Paper: Paper.extend({
      defaultProps: {
        radius: "xs",
        shadow: "0",
      },
    }),
    ActionIcon: ActionIcon.extend({
      defaultProps: {
        variant: "subtle",
        color: "gray",
        radius: "xs",
      },
    }),
    Button: Button.extend({
      defaultProps: {
        radius: "xs",
        styles: {
          label: {
            fontWeight: 450,
          },
        },
      },
    }),
  },
});

export const vars = themeToVars(theme);
