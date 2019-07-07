import React from "react";

export const TitleContext = React.createContext<{
  title: string;
  setTitle: any;
}>({
  title: "",
  setTitle: null
});

interface ScreenTitleProviderProps {
  initialTitle: string;
  children: any;
}

export function ScreenTitleProvider({
  initialTitle = "",
  children
}: ScreenTitleProviderProps) {
  const [title, setTitle] = React.useState(initialTitle);

  const value = React.useMemo(
    () => ({
      title,
      setTitle
    }),
    [title]
  );

  return (
    <TitleContext.Provider value={value}>{children}</TitleContext.Provider>
  );
}

export function useTitle(title: string) {
  console.log("TCL: useTitle -> title", title)
  const { setTitle } = useScreenTitle();
  React.useEffect(() => {
    setTitle(title);
  });
}

export function useScreenTitle() {
  console.log("TCL: useScreenTitle")
  return React.useContext(TitleContext);
}
