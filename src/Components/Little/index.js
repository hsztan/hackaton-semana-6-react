import "./style.css"

function Litte_Form ({formHolder, textButtom}) {
    return(
        <div>
            <form>
                <input type="email" placeholder={formHolder}></input>
                <button id="submit" type="submit">{textButtom}</button>
            </form>
        </div>
    )
}

export default Litte_Form