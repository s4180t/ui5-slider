sap.ui.define(
  ["sap/m/Slider", "sap/m/SliderRenderer", "sap/ui/core/theming/Parameters"],
  function (Slider, SliderRenderer, themingParameters) {
    "use strict";

    return Slider.extend("ui5slider.control.Slider", {
      metadata: {
        events: {
          legendPress: {
            parameters: {
              value: "int",
              target: "object",
            },
          },
        },
      },
      renderer: SliderRenderer,
      onAfterRendering() {
        Slider.prototype.onAfterRendering.apply(this, arguments);
        Array.prototype.forEach.call(
          this.getDomRef().getElementsByClassName("sapMSliderLabel"),
          (ref) => {
            if (ref.classList.contains("sapMLnk")) {
              return;
            }
            ref.classList.add("sapMLnk");
            ref.style.color = themingParameters.get("sapLinkColor");
          }
        );
      },
      ontouchstart(oEvent) {
        const oTouch = oEvent.targetTouches[0];
        if (!oTouch.target.classList.contains("sapMSliderLabel")) {
          return Slider.prototype.ontouchstart.apply(this, arguments);
        }
        this.fireLegendPress({
          value: Array.prototype.indexOf.call(
            this.getDomRef().getElementsByClassName("sapMSliderLabel"),
            oTouch.target
          ),
          target: oTouch.target,
        });
      },
    });
  }
);
