// This function are user to convert time into : 2h 55m


export const formatRuntime = (min) => {
    if (!min) return "N/A";

    const h = Math.floor(min / 60);
    const m = min % 60;

    return `${h}h ${m}m`;
}
