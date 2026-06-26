// import { useNotifications } from "../hooks/useNotifications";

// export default function NotificationCenter() {

//     const {
//         notifications,
//         clearNotifications,
//     } = useNotifications();

//     return (

//         <div
//             style={{
//                 maxWidth: "600px",
//                 margin: "20px auto",
//                 padding: "20px",
//                 border: "1px solid #ddd",
//                 borderRadius: "8px",
//             }}
//         >

//             <h2>
//                 🔔 Notifications
//             </h2>

//             <button
//                 onClick={clearNotifications}
//                 style={{
//                     marginBottom: "15px",
//                 }}
//             >
//                 Clear All
//             </button>

//             {
//                 notifications.length === 0 ? (

//                     <p>
//                         No notifications found
//                     </p>

//                 ) : (

//                     notifications.map(
//                         (notification, index) => (

//                             <div
//                                 key={index}
//                                 style={{
//                                     border: "1px solid #eee",
//                                     padding: "12px",
//                                     marginBottom: "10px",
//                                     borderRadius: "6px",
//                                 }}
//                             >

//                                 <h4>
//                                     {notification.title}
//                                 </h4>

//                                 <p>
//                                     {notification.message}
//                                 </p>

//                                 <small>
//                                     Type: {notification.type}
//                                 </small>

//                             </div>

//                         ),
//                     )

//                 )
//             }

//         </div>

//     );

// }

import { useNotifications } from "../hooks/useNotifications";

export default function NotificationCenter() {
    const {
        notifications,
        clearNotifications,
    } = useNotifications();

    const getTypeStyles = (type) => {
        switch (type) {
            case "success":
                return {
                    border: "border-green-500",
                    badge: "bg-green-100 text-green-700",
                    icon: "✅",
                };
            case "warning":
                return {
                    border: "border-yellow-500",
                    badge: "bg-yellow-100 text-yellow-700",
                    icon: "⚠️",
                };
            case "error":
                return {
                    border: "border-red-500",
                    badge: "bg-red-100 text-red-700",
                    icon: "❌",
                };
            default:
                return {
                    border: "border-blue-500",
                    badge: "bg-blue-100 text-blue-700",
                    icon: "ℹ️",
                };
        }
    };

    return (
        <div className="max-w-2xl mx-auto mt-10 bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">

            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b bg-gray-50">
                <div>
                    <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                        🔔 Notifications
                    </h2>

                    <p className="text-sm text-gray-500 mt-1">
                        Latest system notifications
                    </p>
                </div>

                <button
                    onClick={clearNotifications}
                    className="px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white text-sm font-medium transition"
                >
                    Clear All
                </button>
            </div>

            {/* Body */}
            <div className="max-h-[500px] overflow-y-auto p-6 space-y-4">

                {notifications.length === 0 ? (

                    <div className="text-center py-16">
                        <div className="text-6xl mb-4">🔕</div>

                        <h3 className="text-xl font-semibold text-gray-700">
                            No Notifications
                        </h3>

                        <p className="text-gray-500 mt-2">
                            You're all caught up.
                        </p>
                    </div>

                ) : (

                    notifications.map((notification, index) => {

                        const styles = getTypeStyles(notification.type);

                        return (

                            <div
                                key={index}
                                className={`border-l-4 ${styles.border} bg-white rounded-xl shadow-sm hover:shadow-md transition duration-300 p-5`}
                            >

                                <div className="flex items-start justify-between">

                                    <div className="flex gap-3">

                                        <div className="text-2xl">
                                            {styles.icon}
                                        </div>

                                        <div>

                                            <h3 className="font-semibold text-gray-800 text-lg">
                                                {notification.title}
                                            </h3>

                                            <p className="text-gray-600 mt-1">
                                                {notification.message}
                                            </p>

                                            <div className="flex items-center gap-3 mt-4">

                                                <span
                                                    className={`px-3 py-1 rounded-full text-xs font-semibold ${styles.badge}`}
                                                >
                                                    {notification.type.toUpperCase()}
                                                </span>

                                                <span className="text-xs text-gray-400">
                                                    {new Date(notification.timestamp).toLocaleDateString()}{" "}
                                                    {new Date(notification.timestamp).toLocaleTimeString([], {
                                                        hour: "2-digit",
                                                        minute: "2-digit",
                                                    })}
                                                </span>
                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        );
                    })

                )}

            </div>

        </div>
    );
}