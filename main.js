// classes

// f2C formula F - 32 * 5/9 = celsius
class ConvertTemperature {
  toFahrenheit(cTemp) {
    return ((cTemp * 9) / 5 + 32).toFixed(2);
  }

  toCelsius(fTemp) {
    return (((fTemp - 32) * 5) / 9).toFixed(2);
  }

  meterToKm(meter) {
    return meter / 1000;
  }

  kmToM(kilometer) {
    return kilometer * 1000;
  }

  ltToMl(litter) {
    return litter * 1000;
  }

  MlTol(litter) {
    return litter / 1000;
  }
}

const t1 = new ConvertTemperature();

// Fahrenheit to celsius
const fa = document.querySelector("#fa-input");
fa.addEventListener("focus", (e) => {
  document.querySelector(".output-c").textContent = "";
  e.target.value = "";
});

let inp = "";

fa.addEventListener("blur", (e) => {
  inp = e.target.value;
});

const firstBtn = document.querySelectorAll("button")[0];
firstBtn.addEventListener("click", () => {
  if (inp !== "") {
    document.querySelector(".output-c").textContent =
      t1.toCelsius(inp) + "\xB0C";
  }
});

// reset buttons
const firstReset = document.querySelector(".reset");
firstReset.addEventListener("click", () => {
  document.querySelector(".output-c").textContent = "";
  fa.value = "";
});

// dropdown starts here
document.addEventListener(
  "input",
  function (event) {
    // Only run for #wizard select
    if (event.target.id !== "wizard") return;

    if (event.target.value === "Fahrenheit") {
      document.querySelector(".cap").textContent = "Fahrenheit To Celsius";
      const firstBtn = document.querySelectorAll("button")[0];
      firstBtn.addEventListener("click", () => {
        if (inp !== "") {
          document.querySelector(".output-c").textContent =
            t1.toCelsius(inp) + "\xB0C";
        }
      });
    }

    if (event.target.value === "Celsius") {
      document.querySelector(".cap").textContent = "Celsius to Fahrenheit";
      const secondBtn = document.querySelectorAll("button")[0];
      secondBtn.addEventListener("click", () => {
        if (inp !== "") {
          document.querySelector(".output-c").textContent =
            t1.toFahrenheit(inp) + "\xB0F";
        }
      });
    }
    if (event.target.value === "meter") {
      document.querySelector(".cap").textContent = "Meters to Kilometers";
      const secondBtn = document.querySelectorAll("button")[0];
      secondBtn.addEventListener("click", () => {
        if (inp !== "") {
          document.querySelector(".output-c").textContent =
            t1.meterToKm(inp) + " km";
        }
      });
    }

    if (event.target.value === "kilometer") {
      document.querySelector(".cap").textContent = "Kilometers to Meters";
      const secondBtn = document.querySelectorAll("button")[0];
      secondBtn.addEventListener("click", () => {
        if (inp !== "") {
          document.querySelector(".output-c").textContent =
            t1.kmToM(inp) + " m";
        }
      });
    }
    if (event.target.value === "litter") {
      document.querySelector(".cap").textContent = "Litters to millilitters";
      const secondBtn = document.querySelectorAll("button")[0];
      secondBtn.addEventListener("click", () => {
        if (inp !== "") {
          document.querySelector(".output-c").textContent =
            t1.ltToMl(inp) + " ml";
        }
      });
    }

    if (event.target.value === "millilitter") {
      document.querySelector(".cap").textContent = "Millilitters to Litters";
      const secondBtn = document.querySelectorAll("button")[0];
      secondBtn.addEventListener("click", () => {
        if (inp !== "") {
          document.querySelector(".output-c").textContent =
            t1.MlTol(inp) + " L";
        }
      });
    }

    if (event.target.value === "default") {
      document.querySelector(".cap").textContent = "Fahrenheit to Celsius";
      const secondBtn = document.querySelectorAll("button")[0];
      secondBtn.addEventListener("click", () => {
        if (inp !== "") {
          document.querySelector(".output-c").textContent =
            t1.toCelsius(inp) + "\xB0C";
        }
      });
    }
  },
  false
);
