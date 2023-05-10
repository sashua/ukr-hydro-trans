import { useEffect, useRef } from 'preact/hooks';

type NubmersProps = {
  name: string;
  value: number;
};
export default function Counter({ name, value }: NubmersProps) {
  const valueRef = useRef(null);

  useEffect(() => {
    const initCountUp = async () => {
      const countUpModule = await import('countup.js');
      new countUpModule.CountUp(valueRef.current, value, {
        startVal,
        suffix,
        enableScrollSpy: true,
        scrollSpyOnce: true,
      });
    };
    initCountUp();
  }, []);

  const startVal = Math.floor(value / 2);
  const suffix = `${value < 100 ? '+' : ''}`;

  return (
    <div id="numbers" class="flex w-min flex-col justify-between">
      <p class="text-md-700 text-brand">{name}</p>
      <p ref={valueRef} class="text-H2-mobile lg:text-H2-desktop">
        {startVal + suffix}
      </p>
    </div>
  );
}
