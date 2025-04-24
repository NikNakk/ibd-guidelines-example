function getTreatment() {
  const severity = document.getElementById("severity").value;
  const plan = document.getElementById("treatmentPlan");
  if (severity === "mild") {
    plan.textContent = "Start with 5-ASA. Consider topical therapy.";
  } else if (severity === "moderate") {
    plan.textContent = "Use corticosteroids to induce remission. Assess for immunomodulators.";
  } else {
    plan.textContent = "Consider biologics (anti-TNF, vedolizumab, ustekinumab) and evaluate for hospital admission.";
  }
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').then(reg => {
    console.log('Service worker registered.', reg);
  });
}