import {
    Timeline,
    TimelineItem,
    TimelineTitle,
    TimelineDescription,
    TimelineCompany,
    TimelineHeader,
  } from '@/components/ui/timeline';

  import { TimelineItemType } from '@/types';

  export const TimelineLayout = ({ timelineData }: { timelineData: TimelineItemType[] }) => {
    return (
      <Timeline className='mt-8 p-0'>
        {timelineData.map((item, index) => (
          <TimelineItem key={index}>
            <TimelineHeader>
              {item.company && <TimelineCompany>{item.company}</TimelineCompany>}
              <TimelineTitle>{item.name}</TimelineTitle>
            </TimelineHeader>
            <TimelineDescription>{item.description}</TimelineDescription>
          </TimelineItem>
        ))}
      </Timeline>
    );
  };