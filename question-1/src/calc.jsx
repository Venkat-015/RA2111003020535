export default function Calci(){
    return (
        <div>
            <h1>Calculator</h1>
            <form action="/calci" method="post">
                <input type="text" name="numb_1" placeholder="Enter first number"/>
                <input type="text" name="numb_2" placeholder="Enter second number"/>
                <button type="submit">calculator</button>
            </form>

        </div>
      
    );
}