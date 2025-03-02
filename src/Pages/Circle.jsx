const Circle = ({ ref }) => {
    return (
        <div ref={ref} className="h-[60px] w-[60px] rounded-full bg-indigo-400 relative" style={{ left: 0 }}></div>
    )
}

export default Circle;