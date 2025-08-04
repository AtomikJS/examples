import { After, Every, Scheduled, Timezone } from "@atomikjs/cron";

export class MyService {

    @Scheduled('0 0 * * *')
    dailyTask() {
        console.log('Daily cron task');
    }

    @Scheduled('0 0 * * *', { timezone: Timezone.Paris, name : "test" })
    parisTimeTask() {
        console.log('Cron task at Paris time');
    }

    @Scheduled('0 0 * * *', { name: 'myCronTask' })
    myCronTask() {
        console.log('Custom cron task');
    }

    @Every(60 * 60 * 1000)
    everyHourTask() {
        console.log('Task executed every hour');
    }

    @After(2000, { name: 'afterTest', afterJob : "test" })
    afterTask() {
        console.log('Task executed 2 seconds after test job');
    }

}
