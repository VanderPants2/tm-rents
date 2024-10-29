const App = () => {
    return (
        <div
            className={
                'text-red-500 flex items-center justify-center h-[100vh] w-full cursor-pointer hover:text-blue-500 text-2xl font-bold'
            }
            onClick={() => {
                console.log('linting test');
            }}
        >
            Hello world
        </div>
    );
};

export default App;
