
const SectionHeading = ({heading, subHeading}) => {
    return (
        <div className="my-6">
            <p className="text-center uppercase  ">{heading}</p>
            <h2 className="text-center  ">{subHeading}</h2>
        </div>
    );
};

export default SectionHeading;
