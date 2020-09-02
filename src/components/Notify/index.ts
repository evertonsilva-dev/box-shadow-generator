import Noty, { Layout, Type } from 'noty';

export const Notify = (text: string, type?: Type, layout?: Layout) => {
  new Noty({
    type: type ?? 'success',
    layout: layout ?? 'bottomRight',
    theme: 'sunset',
    text,
    timeout: 4000,
    progressBar: true,
  }).show();
};
