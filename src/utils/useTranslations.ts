import { useIntl } from 'react-intl';

function useTranslation() {
    const { formatMessage } = useIntl();

    const t = id => formatMessage({ id });

    return { t };
}

export { useTranslation };
