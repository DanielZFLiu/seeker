// post of attribute: arrays of tags. and destription


class Post {
    /**
     * @param {string} description
     */
    constructor(description) {
        this.description = description;
        this.tags = [];
    }
    
    /**
     * @param {string} tag
     */
    add_tags(tag){
        this.tags.push(tag);
    }

    get info(){
        return this.description + '\ntags: '+ this.tags;
    }
    
}

export default Post;

// test code

// const test = new Post('Hello world!!');

// test.add_tags("Uoft");
// test.add_tags("CSC258");

// console.log(test.info);


