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
    <TitleContext.Provider value={value}>
      {children}
    </TitleContext.Provider>
  );
}

export function ScreenTitle({ title }: { title: string }) {
  const { title: contextTitle, setTitle } = React.useContext(TitleContext);

  React.useEffect(() => {
    setTitle(title);
  }, [contextTitle]);
  return null;
}

export function useScreenTitle() {
  const { title } = React.useContext(TitleContext);
  return title;
}
