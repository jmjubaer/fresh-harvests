import SectionTag from "./SectionTag";
type TProps = {
    tag: string;
    title: string;
    description: string;
};
const SectionHeading = ({ tag, title, description }: TProps) => {
    return (
        <div className='w-[40%] mx-auto text-center'>
            <SectionTag tag={tag} />
            <h2 className='mt-4 text-5xl font-medium'>{title}</h2>
            <p className='mt-4 text-sm font-secondary'>{description}</p>
        </div>
    );
};

export default SectionHeading;
