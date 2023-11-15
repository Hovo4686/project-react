import './headerBlock.css';

function HeaderBlock () {
    return(
        <div className='container'>
            <div className='block1'>
                <p className='fond1'>Featured Post</p>
                <img className='imge' src="https://images.unsplash.com/photo-1513530534585-c7b1394c6d51?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmVzc2lvbmFsfGVufDB8fDB8fHww" alt="" />
            </div>

            <div className='block2'>
                <p className='fond1'>All Posts</p>
                <p className='vng'>By <span>John Deo </span>  l   Aug 23, 2021 </p>
                <h2>8 Figma design systems that you can download for free today.</h2>
                <div className='back-color'>
                  <p className='vng'>By <span>John Deo </span>  l   Aug 23, 2021 </p>
                  <h2>8 Figma design systems that you can download for free today.</h2>
                </div>
                <p className='vng'>By <span>John Deo </span>  l   Aug 23, 2021 </p>
                <h2>8 Figma design systems that you can download for free today.</h2>

                <p className='vng'>By <span>John Deo </span>  l   Aug 23, 2021 </p>
                <h2>8 Figma design systems that you can download for free today.</h2>

                
            </div>
            <div className='block3' ><p className='fond'>View All</p></div>

        </div>
    );
}
export default HeaderBlock;