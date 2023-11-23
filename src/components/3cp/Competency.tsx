import SingleCompetency from '@/components/3cp/SingleCompetency';

const competencies = [
  {
    key: 1,
    name: 'Pregnancy Identification',
    levels: [
      'Understands health of males and females and initial assessment protocols',
      'Identifies pregnancy using Nischaya Kit',
    ],
  },
  {
    key: 3,
    name: 'Pregnancy Identification',
    levels: [
      'Understands health of males and females and initial assessment protocols',
      'Identifies pregnancy using Nischaya Kit',
    ],
  },
  {
    key: 2,
    name: 'Pregnancy Identification',
    levels: [
      'Understands health of males and females and initial assessment protocols',
      'Identifies pregnancy using Nischaya Kit',
    ],
  },
];

const Competencies = () => {
  return (
    <div className='py-4 '>
      {competencies.map((competency) => {
        return (
          <SingleCompetency key={competency.key} competency={competency} />
        );
      })}
    </div>
  );
};
export default Competencies;
