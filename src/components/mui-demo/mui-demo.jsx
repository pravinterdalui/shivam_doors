import { TextField,Button } from "@mui/material";


export function Muidemo(){
    
    return(
        <div>
        
            <h2 className="mt-4">React MUI</h2>
            <form action="/results">
            <div className="w-25">
                <div>
                    <TextField type="text" name="category" label="Search Amazon" variant="standard" className="w-100">
                    </TextField>
                </div>

                <div className="mt-3">
                    <Button type="submit" variant="contained" color="error" className="w-100" >Search
                    </Button>
                </div>
            </div>
            </form>


        </div>
    )
}