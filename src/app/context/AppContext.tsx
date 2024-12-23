// "use client";
// import { createContext, useContext, useState, ReactNode } from "react";

// interface AppContextType {
//   isHamburgerOpen: boolean;
//   setIsHamburgerOpen: (open: boolean) => void;
// }

// const AppContext = createContext<AppContextType | undefined>(undefined);

// export const useAppContext = (): AppContextType => {
//   const context = useContext(AppContext);
//   if (!context) {
//     throw new Error("useAppContext must be used within an AppProvider");
//   }
//   return context;
// };

// export const AppProvider: React.FC<{ children: ReactNode }> = ({
//   children,
// }) => {
//   const [isHamburgerOpen, setIsHamburgerOpen] = useState<boolean>(false);

//   return (
//     <AppContext.Provider value={{ isHamburgerOpen, setIsHamburgerOpen }}>
//       {children}
//     </AppContext.Provider>
//   );
// };
