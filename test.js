var data = {
    val: '5',
    left: {
        val: '2',
        left: {
            val: '1',
            left: null,
            right: null
        },
        right: {
            val: '4',
            left: {
                val: '3',
                left: null,
                right: null
            },
            right: null
        }
    },
    right: {
        val: '6',
        left: null,
        right: {
            val: '7',
            left: {
                val: '8',
                left: null,
                right: null
            },
            right: null
        }
    }
}

function postorder(data){
    const stack = [data]
    const outStack = []

    while(stack.length){
        const top = stack.pop()
        outStack.push(top)

        top.left && stack.push(top.left)
        top.right && stack.push(top.right)
    }

    while(outStack.length){
        const item = outStack.pop()
        console.log(item.val);
    }
}
postorder(data)