import { DatePicker } from "antd";
import moment, { Moment } from "moment";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Head } from "../components/head";
import { HomeLink } from "../components/link";
import styles from "../styles/Home.module.css";
import { RangeValue } from "rc-picker/lib/interface.d";

export default function Home() {
  const router = useRouter();
  const [timeRange, setTimeRange] = useState<
    { from?: Moment; to?: Moment } | undefined
  >();
  const { RangePicker } = DatePicker;

  // @ts-ignore
  const onChange = (dates: RangeValue<Moment>) => {
    if (!dates) {
      setTimeRange({});
    } else {
      setTimeRange({
        from: moment(dates[0]?.toISOString()),
        to: moment(dates[1]?.toISOString()),
      });
    }
  };
  useEffect(() => {
    if (router.query.from && router.query.to) {
      setTimeRange({
        from: moment(router.query.from as string),
        to: moment(router.query.to as string),
      });
    }
  }, [router.isReady]);

  useEffect(() => {
    if (timeRange) {
      const query: { from?: string; to?: string } = {};
      if (timeRange.from) query.from = timeRange?.from.toISOString();
      if (timeRange.to) query.to = timeRange?.to.toISOString();
      router.push(router.pathname, { query });
    }
  }, [timeRange]);
  const valueProps =
    timeRange?.from && timeRange?.to
      ? { value: [timeRange?.from, timeRange?.to] as RangeValue<Moment> }
      : {};
  return (
    <div className={styles.container}>
      <Head pageName="Case2" />
      <main className={styles.main}>
        <h1>Select range</h1>
        <RangePicker showTime onChange={onChange} {...valueProps} />
        {timeRange ? (
          <p>
            Selected from {timeRange?.from?.format("DD/MM/YY")} to{" "}
            {timeRange?.to?.format("DD/MM/YY")}
          </p>
        ) : null}
        <HomeLink />
      </main>
    </div>
  );
}
