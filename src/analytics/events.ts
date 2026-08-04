export const analyticsEvents = {
  navigationSelected: "navigation_selected",
  callIntent: "call_intent",
  contactFormStarted: "contact_form_started",
  contactFormSucceeded: "contact_form_succeeded",
  contactFormFailed: "contact_form_failed",
} as const;

/** Event transport and consent handling are intentionally deferred. */
