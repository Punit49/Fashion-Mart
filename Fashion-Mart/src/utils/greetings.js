export const getGreetings = () => {
    const hour = new Date().getHours();
    return hour >= 5 && hour < 12 ? "Good Morning" : hour >= 12 && hour < 17 ? "Good Afternoon" : hour >= 17 && hour < 21 ? "Good Evening" : "Good Night";
} 