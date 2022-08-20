export class Skills {
    currentSkill:Skill={
        img:'',
        name:'',
        description:'',
        percentage:''
    };

    skillsList:Skill[] = [
        {
            img: '/assets/images/skills-icons/ilustrador-adobe.png',
            name: 'Adobe illustrator',
            description: 'Utilizado para convertir imágenes que están formadas por píxeles en imágenes formadas por vectores',
            percentage: '100%'
        },
        {
            img: '/assets/images/skills-icons/figma.png',
            name: 'Figma',
            description: 'Editor de gráficos vectorial y una herramienta de generación de prototipos',
            percentage: '50%'
        },
        {
            img: '/assets/images/skills-icons/visual-studio-code.png',
            name: 'Visual studio code',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet nemo earum assumenda aut cupiditate obcaecati.',
            percentage: '70%',
        },
        {
            img: '/assets/images/skills-icons/github.png',
            name: 'Github',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet nemo earum assumenda aut cupiditate obcaecati.',
            percentage: '50%'
        },
        {
            img: '/assets/images/skills-icons/JQuery.png',
            name: 'JQuery',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet nemo earum assumenda aut cupiditate obcaecati.',
            percentage: '80%'
        },
        {
            img: '/assets/images/skills-icons/xd.png',
            name: 'Adobe XD',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet nemo earum assumenda aut cupiditate obcaecati.',
            percentage: '95%'
        },
        {
            img: '/assets/images/skills-icons/js.png',
            name: 'Javascript',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet nemo earum assumenda aut cupiditate obcaecati.',
            percentage: '50%'
        },
        {
            img: '/assets/images/skills-icons/ts.png',
            name: 'Typescript',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet nemo earum assumenda aut cupiditate obcaecati.',
            percentage: '50%'
        },
        {
            img: '/assets/images/skills-icons/css.png',
            name: 'CSS3',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet nemo earum assumenda aut cupiditate obcaecati.',
            percentage: '50%'
        },
        {
            img: '/assets/images/skills-icons/sass.png',
            name: 'SCSS',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet nemo earum assumenda aut cupiditate obcaecati.',
            percentage: '50%'
        },
        {
            img: '/assets/images/skills-icons/ionic.png',
            name: 'Ionic',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet nemo earum assumenda aut cupiditate obcaecati.',
            percentage: '50%'
        },
        {
            img: '/assets/images/skills-icons/firebase.png',
            name: 'Firebase',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet nemo earum assumenda aut cupiditate obcaecati.',
            percentage: '50%'
        },
        {
            img: '/assets/images/skills-icons/angular.png',
            name: 'Angular',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet nemo earum assumenda aut cupiditate obcaecati.',
            percentage: '50%'
        },
        {
            img: '/assets/images/skills-icons/git.png',
            name: 'Git',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet nemo earum assumenda aut cupiditate obcaecati.',
            percentage: '50%'
        },
        {
            img: '/assets/images/skills-icons/sql.png',
            name: 'SQL',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet nemo earum assumenda aut cupiditate obcaecati.',
            percentage: '50%'
        },
        // {
        //     img: '/assets/images/skills-icons/.png',
        //     name: '',
        //     description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet nemo earum assumenda aut cupiditate obcaecati.',
        //     percentage: '50%'
        // }
    ]

    constructor() {
    }

    get all(){
        return this.skillsList;
    }

    findByIndex(index:number|string|null):Skill{
        this.currentSkill =  this.skillsList[Number(index)]
        return this.currentSkill;
    }

}

interface Skill{
    img:string,
    name:string
    description:string
    percentage:string
}