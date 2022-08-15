import React from "react"
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

// The number of columns change by resizing the window
class MyWrapper extends React.Component {
    render() {
        return (
            <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
            >
                <Masonry>
                    <ChildA />
                    <ChildB />
                    {/* Children */}
                    <ChildY />
                    <ChildZ />
                </Masonry>
            </ResponsiveMasonry>
        )
    }
}

// The number of columns don't change by resizing the window
class MyWrapper extends Component {
    render() {
        return (
            <Masonry columnsCount={3}>
                <ChildA />
                <ChildB />
                {/* Children */}
                <ChildY />
                <ChildZ />
            </Masonry>
        )
    }
}