export function getTimeOfDay() {
  const hour = new Date().getHours();

  if (hour >= 3 && hour < 12) {
    return "morning";
  } else if (hour >= 12 && hour < 17) {
    return "afternoon";
  } else if (hour >= 17 && hour < 20) {
    return "evening";
  } else {
    return "night";
  }
}
