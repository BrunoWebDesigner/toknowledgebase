import { Injectable } from '@nestjs/common';

interface IArticle {
  title: string;
  id: string;
}

const articleTitle: IArticle[] = [
  {
    title: 'How to Create BO Account',
    id: '2726190fshjsdhf',
  },
];

interface IStepsDescription {
  description: string;
  stepCount: number;
  dropdown?: {
    title: string;
    description: string;
  };
  picture?: {
    title: string;
    url: string;
  };
  note?: [string]; // Made this optional since not all steps include it
}

interface ISteps {
  id: string;
  steps: IStepsDescription[]; // Use an array of IStepsDescription
}

const articleSteps: ISteps[] = [
  {
    id: '2726190fshjsdhf',
    steps: [
      {
        stepCount: 1,
        description:
          'To create an account you must ask the Operator which permissions they would like to get for this BO account',
        dropdown: {
          title: 'How to fill creation form',
          description: `Hello team,
        Could you please provide the information for each account you need?
        First name:
        Last name:
        Email:
        Permissions: (Available: reports, freebets, legal, transaction, dashboard, invoices, games, Service Desk)`,
        },
      },
      {
        description: `Open <a href="https://example.com">example website</a> Production > Operator Backoffice Access`,
        stepCount: 2,
      },
      {
        description: 'Search for it using Operator or email if necessary',
        stepCount: 3,
      },
      {
        description:
          'On the right of the page, you can Create / Edit / Disable',
        stepCount: 4,
      },
      {
        description: `To create put First and Last names like this example
stuart.chiles@sporty.com - First name: Stuart / Last name: Chiles`,
        stepCount: 5,
        picture: {
          title: 'How to fill creation form',
          url: `blob:https://coingaming.atlassian.net/4c86a9bd-48b4-41aa-b9ab-135283037cff#media-blob-url=true&id=8a038973-7d60-4e27-bda6-82e46303d8cc&collection=contentId-9979756875&contextId=9979756875&mimeType=image%2Fpng&name=image-20240122-094053.png&size=67578&width=637&height=1200&alt=image-20240122-094053.png`,
        },
        note: [
          `If the Operator is Yolo (email something@yolo.com ) we need to create using Account as scope, and Yolo group as Brand.
                For our CS team, we need to use ADMIN as scope.`,
        ],
      },
      {
        description: 'We need to click to Reset Password.',
        stepCount: 6,
        picture: {
          title: 'screenshot',
          url: 'blob:https://coingaming.atlassian.net/e9cc9cd4-36f6-4234-81db-97499b2310dd#media-blob-url=true&id=bda9593e-69e6-4b29-b313-59e92fc1599b&collection=contentId-9979756875&contextId=9979756875&mimeType=image%2Fpng&name=image-20240625-110634.png&size=14945&width=589&height=302&alt=image-20240625-110634.png',
        },
      },
      {
        description: 'Send a message informing you did it',
        stepCount: 7,
        dropdown: {
          title: 'Example - disable',
          description: `
          Hello,
  
  The requested account has been disabled.
  
  Please, don't hesitate to reach out for further assistance.
  
  Best regards,
  Hub88 Team
          `,
        },
      },
      {
        stepCount: 8,
        description:
          'Regarding our Customer Experience Portal: https://ca.hub88.io/ - permission ca_cxportal is needed.',
        note: [
          'If the client is asking only for SD access, set BO as Dashboard at least, and also ca_cxportal access, and inform to the client to log in on BO once to set the password, and after this they can try the SD link.',
        ],
      },
    ],
  },
];

// article name
// article id
// description
// response template
// pictures
// video
// Important notes

interface ICase {
  title: string; // Field for the title
  steps: IStepsDescription[]; // Include the ISteps interface
  id: string;
}

@Injectable()
export class AppService {
  getArticles(): ICase[] {
    const data = articleSteps.map((el: ISteps) => {
      const findTitle = articleTitle.find((title) => title.id === el.id);
      // return { el[title] = findTitle={} ...el };
      return { ...el, title: findTitle.title };
    });
    return data;
  }
}
