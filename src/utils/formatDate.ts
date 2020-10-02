import "intl";
import "intl/locale-data/jsonp/pt-BR";
import { createIntl } from "react-intl";

// Create the `intl` object
const intl = createIntl({
  // Locale of the application
  locale: "pt-BR",
});

export default function formatDate(date: Date) {
  return intl.formatDate(date);
}
