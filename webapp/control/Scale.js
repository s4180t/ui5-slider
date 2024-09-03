sap.ui.define(["sap/m/ResponsiveScale"], function (ResponsiveScale) {
  "use strict";

  return ResponsiveScale.extend("ui5slider.control.Scale", {
    getLabel(value) {
      switch (value) {
        case "0":
          return "Начальный";
        case "1":
          return "Средний";
        case "2":
          return "Целевой";
        case "3":
          return "Ролевая модель";
      }
    },
  });
});
