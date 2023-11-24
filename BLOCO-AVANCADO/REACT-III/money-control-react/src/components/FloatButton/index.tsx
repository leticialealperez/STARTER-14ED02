import { Fab } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';

interface FloatButtonProps {
    handleClick: () => void
}

function FloatButton(props: FloatButtonProps) {
    return (
        <Fab color="primary" onClick={ props.handleClick } aria-label="add" sx={{ position: "absolute", bottom: 10, right: 10}}>
            <AddIcon />
        </Fab>
    )
}

export default FloatButton