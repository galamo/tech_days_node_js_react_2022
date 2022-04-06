interface Iprops {
    title: string,
    color?: string
}

export function HeaderApp(props: Iprops) {
    return <h1 style={{ color: props.color || "pink" }}> {props.title} Page </h1>
}