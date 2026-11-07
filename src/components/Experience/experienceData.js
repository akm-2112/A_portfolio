export const experiences = [
    {
        id: 1,
        company: "GMBF Group Pte. Ltd.",
        role: "Full Stack Developer",
        date: "Jan 2026 – Present",
        description: "Develop and maintain Laravel travel booking systems for bus, tour, hotel, and car rental reservations.",
        highlights: [
            "Shipped dynamic seat pricing for a production bus booking platform, including seat holds and ticket changes. Older seat plans retain their base fares.",
            "Contributed to a production upgrade from Laravel 6 to Laravel 13 on PHP 8.4, resolving API authentication and ticket change compatibility issues.",
            "Own the database schema and API design for a hotel booking module in development. Guide work on nightly inventory, reservation holds, and confirmation.",
        ],
        technologies: ["PHP", "Laravel", "MySQL", "PHPUnit"],
    },
    {
        id: 2,
        company: "Hotel Booking Platform",
        role: "Freelance Laravel Developer",
        date: "2026",
        description: "Delivered an integration with an international hotel inventory API on an existing Laravel platform.",
        highlights: [
            "Added web checkout, booking confirmation polling, and admin cancellation alongside the existing local hotel booking flow.",
            "Corrected currency conversion for room prices and built tools to export booking and cancellation evidence for supplier certification.",
        ],
        technologies: ["Laravel", "REST APIs", "MySQL"],
    },
];
