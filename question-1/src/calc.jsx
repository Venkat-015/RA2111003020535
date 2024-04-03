export default function Calci(){
    return (
        <div>
            <h1>Calculator</h1>
            <form action="/calci" method="post">
                <input type="text" name="numb1" placeholder="Enter the first number"/>
                <input type="text" name="numb2" placeholder="Enter the second number"/>
                <button type="submit">calculator</button>
            </form>

        </div>
      
    );
}